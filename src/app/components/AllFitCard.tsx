import { Exercise } from '@/types/allFitType';
import Image from "next/image";

const AllFitCard = ({ data }: { data: Exercise }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                {<Image
                    src={data.image}
                    alt={data.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                />}
            </figure>
            <div className="card-body">
                <div className="flex flex-wrap gap-2">
                    {data.muscleGroups.map((group, index) => (
                        <span
                            key={index}
                            className="badge bg-[#C2F800] text-black border border-black/20"
                        >
                            {group}
                        </span>
                    ))}
                </div>
                <h2 className="card-title font-2xl">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions jusify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllFitCard;