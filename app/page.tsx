'use client';
import { useEffect } from 'react';
import Loading from './loading';
import { LoadingStateStore } from '@/app/stores/userStore';
import SignIn from '@/components/Buttons/SignIn';
import * as SVG from '@/components/SVGComponents';

export default function Home() {
  const loading = LoadingStateStore((state) => state.loading);
  const setLoading = LoadingStateStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(false);
  }, []);

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
            <source src="/videos/dog_play_in_water.webm" type="video/webm" />
          </video>
          <div className="container mx-auto px-6 py-12 h-full flex justify-start items-start z-[99]">
            <div className="form-wrapper flex flex-col gap-12 justify-center items-start">
              <SVG.SvgFetchLogo />
              <div className="text-content w-[75ch]">
                <h1 className="text-[4rem] font-serif font-extrabold">
                  Furry Friend Finder
                </h1>
                <p className="text-2xl">
                  Search through our database of shelters and get matched with
                  your new companion today!
                </p>
              </div>
              <div className="btn-wrapper self-center">
                <SignIn />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
