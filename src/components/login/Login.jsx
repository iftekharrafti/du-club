/* eslint-disable react/jsx-no-duplicate-props */
import Head from "next/head";
import Image from "next/image";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Style from "./Login.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/api";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import TopTitle from "../topTitle/TopTitle";
// import useAuth from "@/hooks/useAuth";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [scheneChange, setScheneChange] = useState(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Password hide and show
  const showHidePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLoginSubmit = async (data) => {

    try{
      const response = await fetch(`https://dhakauniversityclub.com/api/getMember?mobile=${data.phone}`);
      const result = await response.json();
      if(result.status === 'success'){

        setScheneChange(!scheneChange);
        reset();
      }

      console.log(result);
    }catch(err){
      console.log(err); 
    }
  }

  return (
    <>
      <Head>
        <title>LOGIN::</title>
        <meta name="description" content="{data?.admin?.nameen}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <main className={Style.login}>
        <Container>
          <Row>
            <div
              className="d-flex justify-content-center mb-5 mt-4"
              style={{ width: "100%" }}
            >
              {
                scheneChange ? <Col lg={4} md={7} sm={7}>
                <div className={Style.loginContainer}
                  
                >
                  {/* Form header and login Form data */}
                  {/* Title */}
                  <TopTitle title="Login" />
                  <Form onSubmit={handleSubmit(handleLoginSubmit)}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Control
                        type="text"
                        className={`${Style.inputField} remove-focus`}
                        {...register("phone", { required: true })}
                        placeholder="Phone Number"
                      />
                      {errors.phone && (
                        <span className="text-danger">Phone is required</span>
                      )}
                    </Form.Group>

                    {/* Submit Button */}
                    {loadingBtn ? (
                      <Button
                        variant="primary"
                        type="submit"
                        style={{ width: "100%" }}
                        disabled
                      >
                        Loading...
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        type="submit"
                        style={{ width: "100%" }}
                      >
                        Sign In
                      </Button>
                    )}
                  </Form>
                  <p className="text-center mt-3">
                    Don&apos;t have an account?{" "}
                    <Link href="/application">Application Now</Link>
                  </p>
                </div>
              </Col> : <Col lg={4} md={7} sm={7}>
                <div className={Style.loginContainer}
                  
                >
                  {/* Form header and login Form data */}
                  {/* Title */}
                  <TopTitle title="Code" />
                  <Form >
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Control
                        type="text"
                        className={`${Style.inputField} remove-focus`}
                        {...register("code", { required: true })}
                        placeholder="Code"
                      />
                      {errors.code && (
                        <span className="text-danger">Code is required</span>
                      )}
                    </Form.Group>

                    {/* Submit Button */}
                    {loadingBtn ? (
                      <Button
                        variant="primary"
                        type="submit"
                        style={{ width: "100%" }}
                        disabled
                      >
                        Loading...
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        type="submit"
                        style={{ width: "100%" }}
                      >
                        Sign In
                      </Button>
                    )}
                  </Form>
                </div>
              </Col>
              }
              
            </div>
          </Row>
        </Container>
      </main>
    </>
  );
}