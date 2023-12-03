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

export default function Dashboard() {
  const [info, setInfo] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dhakauniversityclub.com/api/getProductByDay?dayName=sat",
          {
            headers: {
              "Content-Type": "text/html",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setInfo(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

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
              <Row className="mb-4 mt-4">
                <Col lg={3} md={6} sm={12}>
                  <Card>
                    <Card.Img variant="top" src="/tea.jpg" />
                    <Card.Body>
                      <Card.Title className={Style.title}>Tea</Card.Title>
                      <Card.Subtitle
                        className="mb-3"
                        style={{ fontSize: "18px", color: '#0B5ED7' }}
                      >
                        ৳ 10
                      </Card.Subtitle>
                      <div className={Style.wrapper}>
                        <span className={Style.minus} onClick={decrement}>
                          -
                        </span>
                        <span className={Style.num}>{counter}</span>
                        <span className={Style.plus} onClick={increment}>
                          +
                        </span>
                      </div>
                      <div className="d-flex justify-content-center">
                        <Button>Add to cart</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                  <p>Lorem, ipsum dolor.</p>
                </Col>
              </Row>
            </div>
          </div>
        </>
      </main>
    </>
  );
}
