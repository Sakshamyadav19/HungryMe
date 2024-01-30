const ItemCard = ({ props }) => {
	const { name, imageId, isVeg, price } = props;

	return (
		<div className="flex mt-1 py-2 rounded-lg hover:shadow-2xl hover:border-2 px-2">
			<img
				className="h-[75px] border-2 w-[70px] rounded-md"
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
					imageId
				}
			></img>
			<div className="size-full flex justify-between">
				<div className="px-2">
					<h2 className="py-1">{name}</h2>
					<p className=" text-sm">{isVeg ? "🟢 Veg" : "🔴 Non-Veg"}</p>
				</div>
				<div>
					<h2>
						{"Rs. " +
							(price
								? price/100
								: props.variantsV2.variantGroups[0].variations[0].price/100)}
					</h2>
				</div>
			</div>
		</div>
	);
};
export default ItemCard;
