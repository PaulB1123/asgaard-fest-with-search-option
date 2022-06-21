import Content from "../components/Content";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import UserCart from "../components/UserCart";
import { useState } from "react";
import axios from "axios";
import { FaGlassCheers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Purchases({
  userCart,
  setUserCart,
  userAuthenticated,
  setUserAuthenticated,
  countdown,
  setCountdown,
  user,
  setUser,
}) {
  const [purchasingPhase, setPurchasingPhase] = useState(false);
  const [registerPhase, setRegisterPhase] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  return (
    <Content>
      {paymentConfirmed ? (
        <div className="w-full pt-12">
          <article className="w-full p-2 phone:p-8 h-fit bg-concert-redish">
            <OrderConfirmation
              setUserAuthenticated={setUserAuthenticated}
              user={user}
              setUser={setUser}
              setPurchasingPhase={setPurchasingPhase}
            />
          </article>
        </div>
      ) : (
        <div className="w-full">
          <h1 className="text-6xl md:text-7xl font-acier text-center py-20">
            Do you have an account?
          </h1>
          <article className="bg-concert-yellow h-fit p-[4vw] flex flex-col-reverse items-center justify-center tablet:items-start tablet:flex-row phone:space-x-[2vw] gap-y-12">
            {purchasingPhase ? (
              <PaymentForm
                user={user}
                setUser={setUser}
                userCart={userCart}
                setUserCart={setUserCart}
                countdown={countdown}
                setCountdown={setCountdown}
                purchasingPhase={purchasingPhase}
                setPurchasingPhase={setPurchasingPhase}
                setPaymentConfirmed={setPaymentConfirmed}
              />
            ) : userAuthenticated ? (
              <UserLogedIn
                setUserAuthenticated={setUserAuthenticated}
                user={user}
                setUser={setUser}
              />
            ) : registerPhase ? (
              <RegisterUser
                userAuthenticated={userAuthenticated}
                setUserAuthenticated={setUserAuthenticated}
                user={user}
                setUser={setUser}
                setRegisterPhase={setRegisterPhase}
              />
            ) : (
              <UserLogin
                userAuthenticated={userAuthenticated}
                setUserAuthenticated={setUserAuthenticated}
                user={user}
                setUser={setUser}
                setRegisterPhase={setRegisterPhase}
              />
            )}

            <UserCart
              userCart={userCart}
              setUserCart={setUserCart}
              userAuthenticated={userAuthenticated}
              setUserAuthenticated={setUserAuthenticated}
              countdown={countdown}
              setCountdown={setCountdown}
              purchasingPhase={purchasingPhase}
              setPurchasingPhase={setPurchasingPhase}
              user={user}
              setUser={setUser}
              setRegisterPhase={setRegisterPhase}
            />
          </article>
        </div>
      )}
    </Content>
  );
}

export function UserLogin({
  setUserAuthenticated,
  setRegisterPhase,
  user,
  setUser,
}) {
  // const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted");
    // console.log(typeof event.target.email.value);
    // let userEmail = event.target.email.value;
    // console.log(typeof event.target.password.value);
    // let userPassword = event.target.password.value;
    const reqBody = {
      identifier: event.target.email.value,
      password: event.target.password.value,
    };

    setLoading(true);

    const getData = axios
      .post("https://asgaard-userdb.herokuapp.com/api/auth/local", reqBody)
      .then((response) => {
        // console.log("User profile", response.data);
        // console.log("User token", response.data);
        setUser(response.data);
        setUserAuthenticated(true);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        // console.log("An error occurred:", error.response.request.status);
        setError(error.response.request.status);
        setUserAuthenticated(false);
        setUser();
        setLoading(false);
      });

    getData();
  };

  return (
    <section className="h-auto w-full max-w-[400px] py-6 text-black space-y-6 bg-yellow-500 px-4">
      <div>
        <h3 className="text-2xl font-bold">LOG IN</h3>
        <p className="text-sm font-semibold">
          You need to be loged-in to proceed to payment
        </p>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold" htmlFor="email">
            E-mail
          </label>
          <input
            className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            required
            type="email"
            placeholder="E-mail"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="shadow font-bold appearance-none border border-[2px] border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            required
            type="password"
            placeholder="******************"
          />
        </div>
        <button className="w-full bg-black hover:bg-concert-b-green hover:text-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          LOG IN
        </button>
      </form>}
      {error && (
        <p className="mt-2 py-2 bg-concert-pink text-center font-bold border-[3px] border-black">
          Username or password is invalid
        </p>
      )}
      <p className="font-semibold">
        No account?
        <span
          onClick={() => setRegisterPhase(true)}
          className="underline pl-2 font-bold cursor-pointer"
        >
          Sign up
        </span>
      </p>
    </section>
  );
}

export function RegisterUser({
  setRegisterPhase,
  setUserAuthenticated,
  user,
  setUser,
}) {
  // const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("submitted");
    // console.log(event.target.username.value);
    // console.log(event.target.email.value);
    // let userEmail = event.target.email.value;
    // console.log(event.target.password.value);
    // let userPassword = event.target.password.value;
    const reqBody = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    setLoading(true);

    const getData = axios
      .post(
        "https://asgaard-userdb.herokuapp.com/api/auth/local/register",
        reqBody
      )
      .then((response) => {
        // console.log("User profile", response.data);
        // console.log("User token", response.data);
        // setUser(response.data);
        setUser(response.data);
        setUserAuthenticated(true);
        setLoading(false);
        setError(false);
        setRegisterPhase(false);
      })
      .catch((error) => {
        // console.log("An error occurred:", error.response.request.status);
        setError(error.response.request.status);
        setUserAuthenticated(false);
        setUser();
        setLoading(false);
      });

    getData();
  };

  return (
    <section className="h-auto w-full max-w-[400px] py-6 text-black space-y-6 bg-yellow-500 px-4">
      <div>
        <h3 className="text-2xl font-bold">SIGN UP</h3>
        <p className="text-sm font-semibold bg-concert-l-green">
          Please don't forget your log-in details!
        </p>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold" htmlFor="username">
            User name
          </label>
          <input
            className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            required
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold" htmlFor="email">
            E-mail
          </label>
          <input
            className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            required
            type="email"
            placeholder="E-mail"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="shadow font-bold appearance-none border border-[2px] border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            required
            type="password"
            placeholder="******************"
          />
        </div>
        {!loading && <button  className="w-full bg-black hover:bg-concert-b-green hover:text-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          SIGN UP
        </button>}
        {loading && <button disabled className="w-full bg-gray-600 border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          SIGN UP
        </button>}
      </form>}
      {error && (
        <p className="mt-2 py-2 bg-concert-pink text-center font-bold border-[3px] border-black">
          Username or password is invalid
        </p>
      )}
      <div className="bg-concert-yellowish w-full hover:bg-concert-b-green text-black border border-[2px] border-black font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline cursor-pointer flex items-center space-x-4">
        <FaFacebookSquare className="text-4xl" />
        <p className="w-full">Sign up with Facebook</p>
      </div>
      <div className="bg-concert-yellowish w-full hover:bg-concert-b-green text-black border border-[2px] border-black font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline cursor-pointer flex items-center space-x-4">
        <IoLogoGoogle className="text-4xl" />
        <p className="w-full">Sign up with Google</p>
      </div>
    </section>
  );
}

// setUserAuthenticated={setUserAuthenticated}
//             user={user}
//             setUser={setUser}

export function UserLogedIn({ user, setUser, setUserAuthenticated }) {
  return (
    <section className="h-auto w-full max-w-[400px] py-6 text-black space-y-6 bg-yellow-500 px-4">
      <div>
        <h3 className="text-2xl font-bold">Hey there!</h3>
        <div className="flex justify-center pt-4">
          <img
            src="./images/user-picture.jpg"
            alt=""
            className="rounded-full border-[3px] border-black w-40 h-40 object-cover"
          />
        </div>
        <p className="font-semibold text-lg text-center py-4">
          You are logged in as{" "}
          <span className="font-bold">{user.user.username}</span>
        </p>
        <p className=" pt-6">
          Don't forget to add your ticket details, after you complete the
          purchase.
        </p>
      </div>
      <div className="flex justify-around items-center flex-col">
        <Link to={"/account"}>
          <button className="bg-black hover:bg-concert-b-green hover:text-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
            Add ticket details
          </button>
        </Link>
        <p
          className="underline pt-4 font-bold cursor-pointer"
          onClick={() => {
            setUserAuthenticated(false);
            setUser();
          }}
        >
          Log out
        </p>
      </div>
    </section>
  );
}

const ticketDetails = {
  label: "",
  ticketOwner: "",
  ownerAge: 0,
  nationality: "",
  city: "",
  submitted: false,
};

function cartToPurchases(userCart, purchases) {
  let purchasesCopy = { tickets: [], accomodation: [] };
  purchases && (purchasesCopy = { ...purchases });

  // console.log(purchases);

  userCart.map((cartItem) => {
    // console.log(cartItem);
    if (cartItem.type === "ticket") {
      for (let i = 0; i < cartItem.quantity; i++) {
        const ticket = Object.create(ticketDetails);
        ticket.label = cartItem.label;
        ticket.submitted = false;
        ticket.bgColor = cartItem.bgColor;
        // console.log(purchasesCopy.tickets);
        purchasesCopy.tickets = [...purchasesCopy.tickets, ticket];
      }
    } else {
      purchasesCopy.accomodation = [...purchasesCopy.accomodation, cartItem];
    }
  });

  return { purchases: purchasesCopy };
}

function PaymentForm({
  user,
  setUser,
  userCart,
  setUserCart,
  setCountdown,
  setPurchasingPhase,
  setPaymentConfirmed,
}) {
  // const [data, setData] = useState(null);
  const [, setError] = useState(false);
  const [, setLoading] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setPaymentConfirmed(true);
    // console.log("form has been submitted");
    // console.log(user);
    // console.log(user.user.purchases);

    // const ticketsArray = user
    const reqBody = await cartToPurchases(userCart, user.user.purchases);
    // console.log(reqBody);
    setUser((userData) => {
      const copy = userData;
      copy.user.purchases = reqBody.purchases;
      return copy;
    });

    const updatedData = JSON.stringify(reqBody);
    // console.log(updatedData);

    setLoading(true);

    const sendData = axios({
      method: "put",
      url: `https://asgaard-userdb.herokuapp.com/api/users/${user.user.id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.jwt}`,
      },
      data: updatedData,
    })
      .then((response) => {
        setUserCart([]);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        // console.log("An error occurred:", error.response);
        setError(error.response);
        setLoading(false);
      });

    sendData();
  }

  function handleChange(e) {
    if (
      e.target.value.length === 4 ||
      e.target.value.length === 9 ||
      e.target.value.length === 14
    ) {
      e.target.value = e.target.value + " ";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto bg-yellow-500 p-5 text-black"
    >
      <div className="mb-10">
        <h1 className="text-center font-bold text-xl uppercase">
          Secure payment info
        </h1>
      </div>
      <div className="mb-3 flex flex-wrap gap-y-2 mx-2">
        <div className="px-2">
          <label htmlFor="type1" className="flex items-center cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-indigo-500"
              name="type"
              id="type1"
              defaultChecked
            />
            <img
              src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
              className="h-8 ml-3"
              alt="shipments"
            />
          </label>
        </div>
        <div className="px-2">
          <label htmlFor="type2" className="flex items-center cursor-pointer">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-indigo-500"
              name="type"
              id="type2"
            />
            <img
              src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
              className="h-8 ml-3"
              alt="shipments"
            />
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label className="font-bold mb-2 text-sm phone:text-base ml-1">
          Name on card
        </label>
        <div>
          <input
            className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="John Smith"
            type="text"
            required
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="font-bold text-sm phone:text-base mb-2 ml-1">
          Card number
        </label>
        <div>
          <input
            onChange={(e) => handleChange(e)}
            className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="0000 0000 0000 0000"
            type="text"
            required
            inputMode="numeric"
            name="creditCard"
            pattern="[0-9 ]+"
            maxLength="19"
          />
        </div>
      </div>
      <div className="mb-3 -mx-2 flex gap-y-4 phone:items-end flex-col phone:flex-row">
        <div className="px-2 w-1/2 min-w-[200px]">
          <label className="font-bold text-sm phone:text-base mb-2 ml-1">
            Expiration date
          </label>
          <div>
            <select
              required
              className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="01">01 - January</option>
              <option value="02">02 - February</option>
              <option value="03">03 - March</option>
              <option value="04">04 - April</option>
              <option value="05">05 - May</option>
              <option value="06">06 - June</option>
              <option value="07">07 - July</option>
              <option value="08">08 - August</option>
              <option value="09">09 - September</option>
              <option value="10">10 - October</option>
              <option value="11">11 - November</option>
              <option value="12">12 - December</option>
            </select>
          </div>
        </div>
        <div className="px-2 w-1/2 min-w-[100px]">
          <select
            required
            className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2029">2030</option>
            <option value="2029">2031</option>
          </select>
        </div>
      </div>
      <div className="mb-10">
        <label className="font-bold text-sm phone:text-base mb-2 ml-1">
          Security code
        </label>
        <div>
          <input
            className="font-semibold shadow appearance-none border border-[2px] border-black rounded w-32 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="000"
            type="text"
            required
            inputMode="numeric"
            pattern="[0-9]+"
            name="cvc"
            maxLength="3"
          />
        </div>
      </div>
      <div>
        <button className="w-full bg-black hover:bg-concert-b-green hover:text-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Pay now
        </button>
      </div>
    </form>
  );
}

function OrderConfirmation({
  setUserAuthenticated,
  setPurchasingPhase,
  user,
  setUser,
}) {
  return (
    <section className="h-fit max-w-[800px] mx-auto border-[4px] border-black bg-concert-yellowish text-black text-center p-2 phone:p-4">
      <h2 className="text-2xl font-bold pt-12 pb-8">
        THANK YOU FOR YOUR ORDER
      </h2>
      <FaGlassCheers className="w-full mx-auto text-3xl" />
      <p className="pt-2 pb-1">
        Your receipt has been sent to:{" "}
        <span className="font-semibold underline">{user.user.email}</span>
      </p>
      <p className="pt-3 phone:pt-1 pb-1 font-semibold">
        Remember to add your ticked details no later than{" "}
        <span className="font-bold text-xl">30 June!</span>
      </p>
      <div className=" text-sm phone:text-xl pt-12 pb-4 mx-auto w-[70%] border-b-[3px] border-gray-600">
        <h2 className="font-acier text-4xl phone:text-5.5xl font-extralight">
          Asgård
        </h2>
        <p className="font-semibold text-gray-700">FESTIVAL</p>
      </div>
      <div className="flex justify-around items-center flex-col pt-6">
        <Link to={"/account"}>
          <button className="bg-black hover:bg-concert-b-green hover:text-black border border-[2px] border-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer">
            Add ticket details
          </button>
        </Link>
        <p
          className="underline pt-4 font-bold cursor-pointer"
          // onClick={() => {
          //   setPurchasingPhase(false)
          // }}
        >
          Log out
        </p>
      </div>
    </section>
  );
}
