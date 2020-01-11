import React from "react";
import userService from "../../../services/user.service";



export default () => {
    const handleLogin = (values) => {
        console.log(values);
        userService.login(values);
    }    

    return (
            <div className="login">
                <Formik
                    initialValues={ {email: 'yariv@nerdeez.com', password: '12345'} }
                    onSubmit={handleLogin}
                    validationSchema={loginSchema}
                >
                </Formik>
                <Form>
                    <div className="col-12 row nopadding">
                        <div className="col username">
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" />
                        </div>
                        <div className="col password">
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" />
                        </div>
                        <div className="col submit_button">
                            <button>submit</button>
                        </div>
                    </div>
                </Form>
            </div>
    )
}