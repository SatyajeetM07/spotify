"use client";

import {
  SupabaseClient,
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import Model from "./Model";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import useAuthModel from "@/hooks/useAuthModel";
import { useEffect } from "react";

const AuthModel = () => {
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModel();
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!isOpen) {
      onClose();
    }
  };

  return (
    <Model
      title="Welcome back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        providers={["github"]}
        magicLink={true}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
        theme="dark"
      />
    </Model>
  );
};

export default AuthModel;
