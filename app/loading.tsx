import { CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <div className="content-area w-full h-screen text-center align-middle flex justify-center">
      <CircularProgress />
    </div>
  );
};

export default Loading;
