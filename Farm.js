// step 0 write function given stets
const get_yield_for_plant = crop => crop.yield;

const get_yield_for_crop = input => get_yield_for_plant(input.crop) * input.num_crops;

const get_total_yield = ({ crops }) => {yieldTotalCrops = crops.map(crop => get_yield_for_crop(crop));
  return yieldTotalCrops.reduce((acc, value) => acc + value)
};
// step 1 calculate cost for a crop(without environmental factors)
const get_costs_for_crop = input => input.crop.cost * input.num_crops;

// step 2 calculate revenue for a crop(without environmental factors)
const get_revenue_for_crop = input => get_yield_for_crop(input) * input.crop.sale_price;

// step 3 calculate profit for a crop(without environmental factors)
function get_profit_for_crop(input) {
  return get_revenue_for_crop(input) - get_costs_for_crop(input);
}

// step 4 calculate profit for multiple crops (without environmental factors)
const get_total_profit = ({ crops }) => {const profitTotalCrops = crops.map(crop => get_profit_for_crop(crop));
  return profitTotalCrops.reduce((acc, val) => acc + val)
};

// step 5 Take environmental factors into account in calculating the yield of a plant
const get_yield_for_plant_environment = (crop, environment) => {
  const sunPercentage = "sun" in crop.factors ? crop.factors.sun[environment.sun] || 0 : 0;
  const windPercentage = "wind" in crop.factors ? crop.factors.wind[environment.wind] || 0 : 0;
  const soilPercentage = "soil" in crop.factors ? crop.factors.soil[environment.soil] || 0 : 0;
  const percentage = [sunPercentage, windPercentage, soilPercentage];
  multiFactors = percentage.map(percentage => percentage / 100 + 1);
  return Math.floor(multiFactors.reduce((acc, curr) => acc * curr, get_yield_for_plant(crop)))
};

//step 6: Take this step with multiple environmental factors

//step 7: Write the function of step 6, but make sure it will work for crops if one or more environmental factors are not relevant

//step 8 write function get_yield_for_crop
const get_yield_for_crop_environment = (input, environment) => get_yield_for_plant_environment(input.crop, environment) * input.num_crops;

//step 9 write function get_profit_for_crop
const get_profit_for_crop_environment = (input, environment) => get_yield_for_crop_environment(input, environment) * input.crop.sale_price - get_costs_for_crop(input);

//step 10 write function get_total_profit
const get_total_profit_enviroment = ({ crops }, environment) => {
  const profitTotalCrops = crops.map(crop => get_profit_for_crop_environment(crop, environment));
  return profitTotalCrops.reduce((acc, val) => acc + val)
};


module.exports = {
  get_yield_for_plant,
  get_yield_for_crop,
  get_total_yield,
  get_costs_for_crop,
  get_revenue_for_crop,
  get_profit_for_crop,
  get_total_profit,
  get_profit_for_crop_environment,
  get_yield_for_crop_environment,
  get_total_profit_enviroment,
  get_yield_for_plant_environment,

};