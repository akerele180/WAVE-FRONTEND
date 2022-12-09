import React from "react";
import Success from "../../../assets/images/WAVE_WebApp(7).png";
import Reject from "../../../assets/images/WAVE_WebApp(8).png";

export const Reject = () => {
  const [loading3, setLoading3] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { registeredCustomer } = useSelector(
    (state) => state.registeredCustomer
  );

  const handleCustomerConsent = async () => {
    await dispatch(
      customerConsent(
        setLoading3,
        registeredCustomer?.data._id,
        registeredCustomer?.data?.token
      )
    );
  };
  useEffect(() => {
    handleCustomerConsent();
  }, []);

  useEffect(() => {
    if (loading3) {
      navigate("/");
      window.location.reload();
    }
  }, [loading3]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:flex flex-col place-content-center h-[calc(100vh-82px)] relative"
    >
      <div className="mx-auto w-[300px]">
        <img src={Reject} alt="" className="w-full" />
      </div>
      <div>
        <p className="text-center hidden">Thank you for contacting us!</p>
        <p className="text-center px-4">
          We are currently processing your loan request. Please be patient with
          us!
        </p>
        <p className="flex items-center text-center justify-center mt-4">
          <BsSuitHeartFill size={20} className="text-primary mr-1" /> WAVE
        </p>
      </div>
      <nav className="col-span-2 max-md:hidden absolute bottom-4 left-0 right-0">
        <ul className="flex items-center justify-center">
          <li className="px-4 cursor-pointer">Twitter</li>
          <li className="px-4 cursor-pointer">Facebook</li>
          <li className="px-4 cursor-pointer">LinkedIn</li>
          <li className="px-4 cursor-pointer">Instagram</li>
          <li className="px-4 cursor-pointer">Phone Number</li>
          <li className="px-4 cursor-pointer">Email Info</li>
        </ul>
      </nav>
    </motion.section>
  );
};

export const Success = () => {
  const [loading3, setLoading3] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { registeredCustomer } = useSelector(
    (state) => state.registeredCustomer
  );

  const handleCustomerConsent = async () => {
    await dispatch(
      customerConsent(
        setLoading3,
        registeredCustomer?.data._id,
        registeredCustomer?.data?.token
      )
    );
  };
  useEffect(() => {
    handleCustomerConsent();
  }, []);

  useEffect(() => {
    if (loading3) {
      navigate("/");
      window.location.reload();
    }
  }, [loading3]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:flex flex-col place-content-center h-[calc(100vh-82px)] relative"
    >
      <div className="mx-auto w-[300px]">
        <img src={Success} alt="" className="w-full" />
      </div>
      <div>
        <p className="text-center hidden">Thank you for contacting us!</p>
        <p className="text-center px-4">
          We are currently processing your loan request. Please be patient with
          us!
        </p>
        <p className="flex items-center text-center justify-center mt-4">
          <BsSuitHeartFill size={20} className="text-primary mr-1" /> WAVE
        </p>
      </div>
      <nav className="col-span-2 max-md:hidden absolute bottom-4 left-0 right-0">
        <ul className="flex items-center justify-center">
          <li className="px-4 cursor-pointer">Twitter</li>
          <li className="px-4 cursor-pointer">Facebook</li>
          <li className="px-4 cursor-pointer">LinkedIn</li>
          <li className="px-4 cursor-pointer">Instagram</li>
          <li className="px-4 cursor-pointer">Phone Number</li>
          <li className="px-4 cursor-pointer">Email Info</li>
        </ul>
      </nav>
    </motion.section>
  );
};
