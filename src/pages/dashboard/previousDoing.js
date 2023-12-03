/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import useFetch from "@/hooks/useFetch";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Style from "@/styles/dashboard/previousDoing.module.css";
import { useRouter } from "next/router";
import DashboardLeftSide from "@/components/dashboard/dashboardLeftSide/DashboardLeftSide";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import TopTitle from "@/components/topTitle/TopTitle";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PreviousDoing() {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Head>
        <title>DASHBOARD::Today&apos;s Doing</title>
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
              <Row>
                <div className="d-flex mb-5 mt-0" style={{ width: "100%" }}>
                  <Col lg={8} md={10} sm={12}>
                    <div
                      style={{
                        background: "#fff",
                        padding: "25px 50px",
                        borderRadius: "20px",
                        marginTop: "40px",
                      }}
                    >
                      <TopTitle title="Previous Doing" textAlign="left" />
                      {/* Form header and login Form data */}
                      {/* Title */}
                      <Form>
                        <div className={Style.date}>
                          <div className={Style.from}>
                            <Form.Group className="mb-3" controlId="formEmail">
                              <Form.Label className={Style.inputLabel}>
                                From Date
                              </Form.Label>
                              <div className={Style.textField}>
                                <Form.Control
                                  type="date"
                                  className={`${Style.inputField} remove-focus`}
                                  {...register("subject", { required: true })}
                                />
                              </div>
                            </Form.Group>
                          </div>
                          <div className={Style.to}>
                            <Form.Group className="mb-3" controlId="formEmail">
                              <Form.Label className={Style.inputLabel}>
                                To Date
                              </Form.Label>
                              <div className={Style.textField}>
                                <Form.Control
                                  type="date"
                                  className={`${Style.inputField} remove-focus`}
                                  {...register("subject", { required: true })}
                                />
                              </div>
                            </Form.Group>
                          </div>

                          {/* Submit Button */}
                          <div className={Style.submit}>
                            <Button variant="primary" type="submit">
                              Submit
                            </Button>
                          </div>
                        </div>
                        {/* {loadingBtn ? (
                          <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" disabled>
                              Loading...
                            </Button>
                          </div>
                        ) : (
                          <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit">
                              Change Password
                            </Button>
                          </div>
                        )} */}
                      </Form>
                    </div>
                  </Col>
                </div>
              </Row>
            </div>
          </div>
        </>
      </main>
    </>
  );
}
