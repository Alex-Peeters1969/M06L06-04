const {
    get_yield_for_plant,
    get_yield_for_crop,
    get_total_yield,
    get_costs_for_crop,
    get_revenue_for_crop,
    get_profit_for_crop,
    get_total_profit,
    get_yield_for_crop_environment,
    get_profit_for_crop_environment,
    get_total_profit_enviroment,
    get_yield_for_plant_environment,
   } = require("./farm");

  // given tests
  describe("get_yield_for_plant", () => {
    const corn = {
      name: "corn",
      yield: 30,
    };
  
    test("Get yield for plant without environment factors", () => {
      expect(get_yield_for_plant(corn)).toBe(30);
    });
  });
  
  describe("get_yield_for_crop", () => {
    test("Get yield for crop", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const input = {
        crop: corn,
        num_crops: 10,
      };
      expect(get_yield_for_crop(input)).toBe(30);
    });
  });
  
  describe("get_total_yield", () => {
    test("Calculate total yield with multiple crops", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const patato = {
        name: "patato",
        yield: 4,
      };
      const crops = [
        { crop: corn, num_crops: 5 },
        { crop: patato, num_crops: 2 },
      ];
      expect(get_total_yield({ crops })).toBe(23);
    });
  
    test("Calculate total yield with 0 amount", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const crops = [{ crop: corn, num_crops: 0 }];
      expect(get_total_yield({ crops })).toBe(0);
    });
  });
  // step 1 calculate cost for a crop
  describe("get_costs_for_crop", () => {
    const corn = {
        name: "corn",
        cost: 1
    };
    const input = {
        crop: corn,
        num_crops: 28,
    };
    test("Get costs for a crop", () => {
        expect(get_costs_for_crop(input)).toBe(28);
    });
});
// step 2 calculate revenue for a crop
describe("get_revenue_for_crop", () => {
  const peer = {
      name: "peer",
      yield: 18,
      sale_price: 3,
  };
  const input = {
      crop: peer,
      num_crops: 5,
  }

  test("Get revenue for crop", () => {
      expect(get_revenue_for_crop(input)).toBe(270);
  });
});
// step 3 profit for one crop
describe("get_profit_for_crop", () => {
  const peer = {
      name: "peer",
      cost: 1,
      yield: 18,
      sale_price: 3,
  };
  const input = {
      crop: peer,
      num_crops: 5
  }

  test("Get profit for crop", () => {
      expect(get_profit_for_crop(input)).toBe(265);
  });
});
// step 4 total profits for all crops
describe("get_total_profit", () => {
    const peer = {
        name: "peer",
        cost: 1,
        yield: 18,
        sale_price: 3,
    };
    const corn = {
        name: "corn",
        cost: 1,
        yield: 3,
        sale_price: 3
    };
    const potato = {
        name: "potato",
        cost: 2,
        yield: 4,
        sale_price: 5
    }
    const orange = {
        name: "orange",
        cost: 3,
        yield: 13,
        sale_price: 2
    }
    const crops = [
        { crop: corn, num_crops: 5 },
        { crop: potato, num_crops: 2 },
        { crop: peer, num_crops: 10 },
        { crop: orange, num_crops: 6 }
    ];
    test("Get total profit", () => {
        expect(get_total_profit({ crops })).toBe(744);
    });
});

// step 5 function that will take environmental factors into account
describe("get_yield_for_plant_environment", () => {
  const corn = {
      name: "corn",
      yield: 30,
      factors: {
          sun: {
              low: -50,
              medium: 0,
              high: 50,
          },
      },
  };
  const environment_factors = {
      sun: "low",
  };
  test("Get yield for plant taking environmental factors into account", () => {
      expect(get_yield_for_plant_environment(corn, environment_factors)).toBe(15)
  });
});

// step 6 test get_yield_for_plant with multiple environmental factors
// step 7 one or more environmental factors are not relevant for a crop

// step 8 write a test that will test the function get_yield_for_crop_environment
describe("get_yield_for_crop_environment", () => {

  const potato = {
      name: "potato",
      cost: 2,
      yield: 4,
      sale_price: 5,
      factors: {
          sun: {
              low: -60,
              medium: 0,
              high: 50,
          },

         
      }
  };

  const environment_factors = {
      sun: "high",
      
      
  };

  const input = { crop: potato, num_crops: 14 }

  test("Get yield for crop taking environmental factors into account", () => {
      expect(get_yield_for_crop_environment(input, environment_factors)).toBe(84)
  });
});

// step 9 write at test that will test et_profit_for_crop_environment
describe("get_profit_for_crop_environment", () => {

  const corn = {
      name: "corn",
      cost: 1,
      sale_price: 3,
      yield: 30,
      factors: {
          sun: {
              low: -50,
              medium: 0,
              high: 50,
          },
          wind: {
              low: 0,
              medium: -20,
              high: -60,
          },
          soil: {
              clay: 20,
              sandy_clay: 0,
              sand: -20,
          }
      }
  };

  const environment_factors = {
      sun: "medium",
      wind: "high",
      soil: "sand",
  };

  const input = { crop: corn, num_crops: 10 }

  test("Get profit for crop taking environmental factors into account", () => {
      expect(get_profit_for_crop_environment(input, environment_factors)).toBe(260)
  });
});

// step 10 write a test for get_total_profit_enviroment

describe("get_total_profit_enviroment", () => {

  const corn = {
      name: "corn",
      cost: 1,
      sale_price: 3,
      yield: 30,
      factors: {
        sun: {
            low: -60,
            medium: 0,
            high: 50,
        },
        wind: {
            low: 0,
            medium: -20,
            high: -60,
        },
        soil: {
            clay: 20,
            sandy_clay: 0,
            sand: -20,
        }
      }
  };
  const peer = {
      name: "peer",
      cost: 2,
      yield: 6,
      sale_price: 10,
      factors: {
        sun: {
            low: 80,
            medium: -30,
            high: 20,
        },
        wind: {
            low: 0,
            medium: -20,
            high: -40,
        },
        soil: {
            clay: -40,
            sandy_clay: 10,
            sand: 20,
        }
      }
  };
  const potato = {
      name: "potato",
      cost: 3,
      yield: 13,
      sale_price: 2,
      factors: {
        sun: {
            low: 20,
            medium: -5,
            high: -15,
        },
        wind: {
            low: 0,
            medium: -10,
            high: -30,
        },
        soil: {
            clay: 10,
            sandy_clay: 0,
            sand: -25,
        }
      }
  };
  const orange = {
      name: "orange",
      cost: 2,
      yield: 4,
      sale_price: 5,
      factors: {
        sun: {
            low: 10,
            medium: 5,
            high: 2,
        },
        wind: {
            low: 0,
            medium: -5,
            high: -20,
        },
        soil: {
            clay: 20,
            sandy_clay: 10,
            sand: -30,
        }
      }
  };


  const environment_factors = {
      sun: "medium",
      wind: "high",
      soil: "sandy_clay",
  };

  const crops =
      [{ crop: corn, num_crops: 5 },
      { crop: peer, num_crops: 2 },
      { crop: potato, num_crops: 10 },
      { crop: orange, num_crops: 6 }]

  test("Get profit for crop taking environmental factors into account", () => {
      expect(get_total_profit_enviroment({ crops }, environment_factors)).toBe(419)
  });
});




