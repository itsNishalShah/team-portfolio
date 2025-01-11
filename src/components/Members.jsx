import React from "react";
import data from "../assets/data/data.json"
export const Members = () => {
    return <>
        <div className="block w-[100%] h-[200px] px-[50px] pt-[20px] text-white font-customFont">
                <div className=" h-[700px] pt-[20px] bg-red-300 block justify-between">
                {data.map((member) => {
                    return <div className="w-[150px] h-[150px] block text-center mb-[90px]">
                                <img src={member.image} alt="" className="rounded-[50%] w-[150px] h-[150px]"/>
                                <div className="pt-[10px]"><span>{member.name}</span></div>
                            </div>
                })}
                </div>
        </div>
    </>
}