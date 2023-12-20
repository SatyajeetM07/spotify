"use client";

import { useEffect, useState } from "react";

import AuthModel from "@/components/AuthModel";
import SubscribeModel from "@/components/SubscribeModel";
import UploadModel from "@/components/UploadModel";
import { ProductWithPrice } from "@/types";

interface ModelProviderProps {
  products: ProductWithPrice[];
}

const ModelProvider: React.FC<ModelProviderProps> = ({
  products
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModel />
      <SubscribeModel products={products} />
      <UploadModel />
    </>
  );
}

export default ModelProvider;