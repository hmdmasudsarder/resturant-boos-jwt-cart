import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleLogin = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user)
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then((res) => {console.log(res)
            navigate('/')
            })
        })
        .catch(error => {console.log(error.message)})
    }
    return (
        <div>
            <div className="p-8 text-center">
            <div className="divider"></div>
            <button onClick={handleLogin} className="btn">
                GooGle
                <FaGoogle></FaGoogle>
            </button>
        </div>
        </div>
    );
};

export default SocialLogin;