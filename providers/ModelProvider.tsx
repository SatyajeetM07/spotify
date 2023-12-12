"use client";

import Model from "@/components/Model";
import {useEffect, useState} from "react";

const ModelProvider = ()=>{

    const [isMounted,setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
        
    },[]);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Model/>
        </>
    );
}

export default ModelProvider;