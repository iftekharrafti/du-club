/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import useFetch from "@/hooks/useFetch";
import { Col, Container, Row, Table } from "react-bootstrap";
import Style from "@/styles/dashboard/dashboard.module.css";
import { useRouter } from "next/router";
import DashboardLeftSide from "@/components/dashboard/dashboardLeftSide/DashboardLeftSide";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";

export default function Dashboard() {
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
                <Col md={10} sm={12}>
                  <div className={Style.contentContainer}>
                  <div className={`d-flex justify-content-between`}>
                    <div>
                      <h5>Meal Chart</h5>
                    </div>
                    <div style={{ marginRight: "15px" }}>
                      <h5>Nov-2023</h5>
                    </div>
                  </div>

                  <p>
                    All meal can be turned on at once when Paid your payment. If
                    you don&apos;t pay, you turn the meal OFF OR ON by clicking
                    one by one on date 1 to 8.
                  </p>
                  <p>
                    Click specific day button to change meal/dayfeast status
                  </p>

                  {/* Payment Table */}
                  <div className={`table-responsive`}>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Breakfast</th>
                          <th>Lunch</th>
                          <th>Dinner</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </>
      </main>
    </>
  );
}
