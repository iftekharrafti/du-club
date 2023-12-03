/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import useFetch from "@/hooks/useFetch";
import { Col, Container, Row, Table, Card, Button } from "react-bootstrap";
import Style from "@/styles/dashboard/dashboard.module.css";
import { useRouter } from "next/router";
import DashboardLeftSide from "@/components/dashboard/dashboardLeftSide/DashboardLeftSide";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import { useEffect, useState } from "react";
import axios from "axios";

async function getData() {
  let res = await fetch(
    "https://dhakauniversityclub.com/api/getProductByDay?dayName=sat"
  );
  let json = await res.json();
  return json;
}

export default function Dashboard({ data }) {
  const [info, setInfo] = useState([]);
  const [counter, setCounter] = useState(0);

  // const data = await getData();
  // console.log(data);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  // Increment value
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <Head>
        <title>DASHBOARD::</title>
        <meta name="description" content="Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.jpeg" />
      </Head>
      <main>
        <>
          <div className={`${Style.mainContainer} d-flex`}>
            {/* Dashboard Left Side and Header */}
            <DashboardLeftSide />

            {/* Main Content */}
            <div className={`${Style.content} px-4`}>
              <Row className="pb-4 pt-4">
                <Col lg={10} md={8}>
                  <Row>
                    {data?.data?.map((item) => (
                      <Col lg={4} md={6} sm={12} key={item.id}>
                        <Card className="d-flex flex-row px-2 mb-4">
                          <div className="d-flex align-items-center">
                            <Card.Img
                              className={Style.img}
                              variant="top"
                              src={`https://dhakauniversityclub.com/${item?.productImgUrl}`}
                            />
                          </div>
                          <div>
                            <Card.Body>
                              <Card.Title className={Style.title}>
                                {item?.productName}
                              </Card.Title>
                              <Card.Subtitle
                                className="mb-3"
                                style={{ fontSize: "15px", color: "#0B5ED7" }}
                              >
                                ৳ 10
                              </Card.Subtitle>
                              <div className={Style.wrapper}>
                                <span
                                  className={Style.minus}
                                  onClick={decrement}
                                >
                                  -
                                </span>
                                <span className={Style.num}>{counter}</span>
                                <span
                                  className={Style.plus}
                                  onClick={increment}
                                >
                                  +
                                </span>
                              </div>
                              <div className="d-flex justify-content-center">
                                <Button size="sm">Add to cart</Button>
                              </div>
                            </Card.Body>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const response = await axios.get(
      "https://dhakauniversityclub.com/api/getProductByDay?dayName=mon"
    );

    const data = response.data;

    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
        data: null,
      },
    };
  }
};
