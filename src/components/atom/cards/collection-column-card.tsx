import React from "react";
import Image from "next/image";
import { CollectionDataType } from "@/lib/types";
import { getPriceData, s3ImageUrlBuilder } from "@/lib/utils";
import { useAuth } from "@/components/provider/auth-context-provider";

interface CardProps {
  data: CollectionDataType;
  handleNav: () => void;
}

const ColumColCard: React.FC<CardProps> = ({ data, handleNav }) => {
  const citreaPrice = getPriceData();

  //todo end bas function uldsen bn
  const formatPrice = (price: number) => {
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 6,
    });
  };

  return (
    <button
      onClick={handleNav}
      className="w-full min-w-[1216px] transition-colors bg-neutral500 bg-opacity-[50%] hover:bg-neutral400 hover:bg-opacity-[30%] rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:pr-8"
    >
      <div className="sm:grid grid-cols-[2fr_3fr_2fr] w-full sm:items-center">
        {/* Collection Info */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 w-[376px]">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0">
            <Image
              width={248}
              height={248}
              src={s3ImageUrlBuilder(data.logoKey)}
              className="rounded-lg object-cover"
              alt={`${data.name || "Collection"} logo`}
            />
          </div>
          <p className="text-neutral50 font-medium text-base sm:text-lg lg:text-xl truncate">
            {data.name}
          </p>
        </div>

        {/* Price Info */}
        <div className="grid grid-cols-3">
          {/* Floor Price */}
          <div className="text-right pr-2">
            <p className="font-medium text-sm sm:text-lg lg:text-lg text-neutral50">
              {formatPrice(data.floor)}
              <span className="ml-1 text-xs sm:text-sm">EDU</span>
            </p>
            <span className="font-medium text-xs sm:text-sm lg:text-md text-neutral200">
              ${formatPrice(data.floor * citreaPrice)}k
            </span>
          </div>

          {/* Volume */}
          <div className="text-right">
            <p className="font-medium text-sm sm:text-lg lg:text-lg text-neutral50">
              {formatPrice(data.volume)}
              <span className="ml-1 text-xs sm:text-sm">EDU</span>
            </p>
            <span className="font-medium text-xs sm:text-sm lg:text-md  text-neutral200">
              ${formatPrice(data.volume * citreaPrice)}k
            </span>
          </div>

          {/* Market Cap */}
          <div className="text-right">
            <p className="font-medium text-sm sm:text-lg lg:text-lg text-neutral50">
              {formatPrice(data.marketCap)}
              <span className="ml-1 text-xs sm:text-sm">EDU</span>
            </p>
            <span className="font-medium text-xs sm:text-sm  lg:text-md text-neutral200">
              ${formatPrice(data.marketCap * citreaPrice)}k
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 text-right">
          <span className="font-medium text-sm sm:text-lg lg:text-lg text-neutral50">
            {data.soldCount}
          </span>
          <span className="font-medium text-sm sm:text-lg lg:text-lg text-neutral50">
            {data.listedCount}
          </span>
          <span className="font-medium text-sm sm:text-lg lg:text-lg text-neutral50">
            {data?.ownerCount ? data?.ownerCount : 0}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ColumColCard;
