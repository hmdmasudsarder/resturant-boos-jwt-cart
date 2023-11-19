import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const {createUser, updateUserProfile} =  useContext(AuthContext)
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
    .then(result => {
        const loggedUser = result.user;
        updateUserProfile(data.name, data.PhotoURL)
        .then(() => {
            console.log('User Profile Update')
            reset()
            navigate('/')
        })
        .catch(error => console.log(error))
        console.log(loggedUser)
    })
    console.log(data)
};
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="First Name"
                className="input input-bordered"
              />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                {...register("PhotoURL", { required: true })}
            
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.PhotoURL && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
        
              />
              {errors.email && <span className="text-red-400">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {required: true, minLength: 5, maxLength: 8})}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === 'required' && <span className="text-red-400">Password is required</span>}
              {errors.password?.type === 'minLength' && <span className="text-red-400">5 required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="btn btn-primary"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
