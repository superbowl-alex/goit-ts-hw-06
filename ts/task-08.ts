const form: HTMLFormElement | null = document.querySelector(".login-form");

form?.addEventListener("submit", handleSubmit);

function handleSubmit(event: SubmitEvent): void {
  event.preventDefault();
  const target = event.currentTarget as HTMLFormElement | null;
  if (!target) return;
  const {elements} = target;
  if (!elements || !('email' in elements) || !('password' in elements)) return;
  const { email, password } = elements;

  if ((email as HTMLInputElement).value === "" || (password as HTMLInputElement).value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${(email as HTMLInputElement).value}, Password: ${(password as HTMLInputElement).value}`);
  target.reset();
}
