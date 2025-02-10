'use client';
import { useEffect } from 'react';
import { LoadingStateStore } from '@/app/stores/userStore';
import Loading from '@/app/loading';
import { SignInForm } from '@/components/Forms/SignInForm';
import * as SVG from '@/components/SVGComponents';

const SignInPage = () => {
  const loading = LoadingStateStore((state) => state.loading);
  const setLoading = LoadingStateStore((state) => state.setLoading);
  return (
    <>
      {!loading ? (
        <div className="flex flex-row h-screen w-full relative">
          <div className="background-overlay-dark absolute top-0 left-0 w-full h-full opacity-60 z-[1] bg-black"></div>
          <video
            className="h-full w-full object-cover absolute pointer-events-none"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src="/videos/dog_chew.webm" type="video/webm" />
          </video>
          <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center z-[99]">
            <div className="form-wrapper px-8 py-10">
              <SVG.SvgFetchLogo />
              <p className="text-2xl mb-2 mt-6">
                To get started, please enter your name and email
              </p>
              <SignInForm />
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SignInPage;
