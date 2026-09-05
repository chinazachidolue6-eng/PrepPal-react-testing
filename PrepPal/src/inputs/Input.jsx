import "./input.module.css";

function Input() {
  return (
    <>
      <form action="">
        <input label="Name" type="text" placeholder="Enter your name" />

        <input
          label="Email"
          type="email"
          placeholder="Your email Address"
          error="enter valid email"
        />
      </form>
    </>
  );
}

export default Input;
