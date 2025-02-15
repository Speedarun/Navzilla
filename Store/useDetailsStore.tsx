import {create} from 'zustand';
import { dummyDetails } from '@/DummyDetails/dummyDetails';

interface Coffee {
    name: string;
    category: string;
    rating: number;
    price: number;
    id: string;
    image: string;
    numberOfRatings: number;
    description: string
}

interface Details {
    details: Coffee[];
    fetchDetails: () => void;
}

export const useDetailsStore = create<Details>((set: any) => ({
    details: [],
    fetchDetails: () => {
        set((state: any) => ({
            details: [...state.details, ...dummyDetails]
        }));
    }
}));
