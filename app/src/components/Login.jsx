import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card card-side bg-base-100">
          <div className="card-body p-8">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form>
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input required placeholder="Enter email" className="grow" />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Enter password"
                />
              </label>

              <div className="text-center">
                {loading ? (
                  <div className="spinner-border text-primary" role="status">
                    {/* <span className="visually-hidden">Loading...</span> */}
                  </div>
                ) : (
                  <button className="btn btn-md btn-primary" type="submit">
                    Login
                  </button>
                )}
              </div>
              <div className="flex justify-end mt-4 cursor-pointer">
                <span
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Forgot password?
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Forgot Password</h3>
          <hr />
          <div className="mt-4">
            <label className="input input-bordered flex">
              <input type="email" className="grow" />
            </label>
            <div className="flex mt-2 justify-center">
              <button className="btn btn-primary size-sm">
                Send Reset Email
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default Login;
