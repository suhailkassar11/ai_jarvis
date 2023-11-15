import {create} from 'zustand';

interface useProModalStore{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
}

export const UseProModal = create((set) => ({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),   
  }));