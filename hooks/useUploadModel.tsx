import {create} from "zustand";

interface UploadModelStore{
    isOpen:boolean;
    onOpen:() => void;
    onClose:() => void;
};

const useUploadModel=create<UploadModelStore>((set)=>({
    isOpen:false,
    onOpen:() => set({ isOpen : true }),
    onClose:() => set({ isOpen : true }),
    
}));

export default useUploadModel;