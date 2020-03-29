const buildObject = ({ names, prefix, target, suffix }) => {
  return names.reduce((reduction, name) => {
    let envVarValueForTarget = getEnvVarValueForTarget({
      target,
      name,
    });

    reduction[`${prefix}${name}${suffix}`] = envVarValueForTarget;

    return reduction;
  }, {});
};

const getEnvVarValueForTarget = ({ target, name }) => {
  switch (target) {
    case "PRODUCTION":
      return JSON.stringify(process.env[name]);
    case "DEMO":
      return JSON.stringify(process.env[`DEMO_${name}`]);
    case "STAGING":
      return JSON.stringify(process.env[`STAGING_${name}`]);
    default:
      return JSON.stringify(process.env[name]);
  }
};

export const buildGlobalsObjectFromEnv = ({ globals, target }) => {
  let { names, prefix, suffix } = globals;

  return buildObject({ names, prefix, target, suffix });
};
