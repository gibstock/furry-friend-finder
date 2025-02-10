import Link from 'next/link';

const SignInButton = () => {
  return (
    <Link href={'/auth/signin'}>
      <div className="signin-button-container rounded-md hover:bg-[rgb(48_13_56)] bg-white text-black hover:text-white py-3 px-4">
        <p>Search</p>
      </div>
    </Link>
  );
};

export default SignInButton;
