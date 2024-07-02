export default function LoginButton() {
  return (
    <a
      href={
        "https://accounts.intania.org/?appId=test-app&callbackUrl=http://localhost:3000/profile"
      }
    >
      <button>Login</button>
    </a>
  );
}
