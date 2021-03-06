const actual_weights_user_id_applicable_dates = user_id => {
  // returns query of all applicable_date's for a given user_id, where the "actual_weight_kg" is present. used in subquery by actual_weights_daily_applicable_dates which calculates the appropriate applicable date for each "observation date"
  return `
    ( select 
        ubd.user_id,
        ubd.applicable_date
      from user_budget_data as ubd
      where
        ubd.user_id = ${user_id} and
        ubd.actual_weight_kg is not null
    )

  `;
};

module.exports = actual_weights_user_id_applicable_dates;
