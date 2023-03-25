<template>
    <div class="container">
      <form class="form">
        <header>
          Credit card information
          <span class="message">Fill the form to continue.</span>
        </header>
        <label>
          <span>Card Number</span>
          <input placeholder="Type your card number" class="input" type="number" required="">
        </label>
        <label>
          <span>Name on card</span>
          <input placeholder="Type your name as appear on card bg-ifo" class="input" type="text" required="">
        </label>
        <fieldset>
          <label class="sm">
            <span>Exp. Month</span>
            <div class="custom-select">
              <select class="input" type="select" required="">
                <option></option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
          </label>
          <label class="sm">
            <span>Exp. Year </span>
            <div class="custom-select bg-info">
              <select class="input" type="select" required="" >
                <option></option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </select>
            </div>
          </label>
          <label class="sm">
            <span>CVV </span>
            <input class="input" placeholder="1234" size="4" maxlength="4" type="text" required="">
          </label>
        </fieldset>
        <div class="submitCard">
          <button>Complete payment</button>
          <select class="input" type="select" required="" ></select>
        </div>
      </form>
    </div>
  </template>

  <script>
  export default {

  }
  </script>

  <style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .form {
    --col1: #00bfff;
    --col2: #00BFFF; /* blue */
    --col3: #00BFFF; /* black */
    --col4: #00BFFF;
    --col5: #00BFFF;
    --sh: rgba(80, 80, 80, 0.35);
    --rad: 4px;
    --radBig: 10px;
    border-radius: 0 0 var(--radBig) var(--radBig);
    box-shadow: 0 0 20px var(--sh);
    display: flex;
    flex-direction: column;
    gap: 1.5em 1em;
    padding: 0.5px;
    position: relative;
    max-width: 75%;
    margin: auto;
    transition: background .3s ease-out, max-height .3s ease-out;
  }

  body {
    margin: 0;
    padding: 0;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index:auto;
}
/* Initial form state */
.form {
  --col1: #00bfff;
  --col2: #00BFFF; /* blue */
  --col3: #00BFFF; /* black */
  --col4: #00BFFF;
  --col5: #00BFFF;
  --sh: rgba(80, 80, 80, 0.35);
  --rad: 4px;
  --radBig: 10px;
  border-radius: 0 0 var(--radBig) var(--radBig);
  box-shadow: 0 0 20px var(--sh);
  display: flex;
  flex-direction: column;
  gap: 1.5em 1em;
  padding: 1em;
  position: relative;
  max-width: 75%;
  margin: auto;
  transition: background .3s ease-out, max-height .3s ease-out;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  margin-top: auto;

}

body {
  margin: 0;
  padding: 0;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.form {
  max-width: 100%;
  max-height: calc(100% - 70px);
  margin-top: 70px;
  overflow-y: scroll;
}


.form::before {
  content: 'Ready to purchase?';
  color: var(--col2);
  font-size: 1.2em;
  font-weight: 700;
  display: grid;
  width: calc(100% - 2em);
  height: 60%;
  position: absolute;
  place-items: center;
  z-index: 99999;
}

.form::after {
  content: '';
  backdrop-filter: blur(6px) grayscale(100%);
  background: linear-gradient(-180deg, rgb(10, 10, 10) 0%, rgba(26, 152, 214, 0.5) 70%, rgba(255, 255, 255, 0.3) 90%);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  display: block;
  position: absolute;
  z-index: 999;
}

.form::after,
.form::before {
  border-radius: 0 0 var(--radBig) var(--radBig);
  pointer-events: none;
  transition: all .5s ease-out;
}

/* Form hover and focus */
.form:hover,
.form:focus-within {
  max-width: 100%;
  max-height: 380px;
}

.form:focus-within {
  overflow: initial;
}

.form:hover::before,
.form:hover::after {
  opacity: 0;
}

.form:hover::after {
  backdrop-filter: blur(0) grayscale(0%);
}

.form header {
  color: var(--col1);
  font-size: 1.25rem;
  font-weight: 600;
}

/* Labels and inputs UI */
:is(.form) label span, label input {
  flex: 1 100%;
  transition: all .3s ease-out;
}

:is(.form) input, select, button {
  appearance: none;
  border: 0;
  padding: .75em;
  border-radius: var(--rad);
  transition: all .3s ease-out;
}

.form label {
  display: flex;
  flex-flow: row wrap;
  color: var(--col4);
  gap: .5em;
}

.form input {
  box-shadow: inset 3px 3px 1px var(--sh);
}

.form fieldset {
  display: flex;
  backdrop-filter: blur(10px);
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: .5em;
}

.Exp-Month{
    border: black;
}

</style>