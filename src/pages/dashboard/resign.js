/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import useFetch from "@/hooks/useFetch";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import Style from "@/styles/dashboard/payment.module.css";
import { useRouter } from "next/router";
import DashboardLeftSide from "@/components/dashboard/dashboardLeftSide/DashboardLeftSide";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import TopTitle from "@/components/topTitle/TopTitle";
import EntriesSearch from "@/components/dashboard/dashboardHeader/entriesSearch/EntriesSearch";
import Button from "@/components/button/Button";

export default function Resign() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>DASHBOARD::Resign</title>
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
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Member Resign Application</p>
                    </div>
                    <div style={{ marginRight: "15px" }}>
                      <Button
                        title="Application"
                        
                      />
                    </div>
                  </div>

                  <EntriesSearch />
                  {/* Payment Table */}
                  <div className="table-responsive">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Card No</th>
                          <th>Submitted Date</th>
                          <th>MealOff Month</th>
                          <th>Reason</th>
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
