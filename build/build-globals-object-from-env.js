const buildObject = ({ names, prefix, source, suffix, target }) => {
  return names.reduce((reduction, name) => {
    let envVarValueForTarget = getEnvVarValueForTarget({
      target,
      name,
      source,
    });

    reduction[`${prefix}${name}${suffix}`] = envVarValueForTarget;

    return reduction;
  }, {});
};

const getEnvVarValueForTarget = ({ name, source, target }) => {
  switch (target) {
    case "PRODUCTION":
      return JSON.stringify(source[name]);
    case "DEMO":
      return JSON.stringify(source[`DEMO_${name}`]);
    case "STAGING":
      return JSON.stringify(source[`STAGING_${name}`]);
    default:
      return JSON.stringify(source[name]);
  }
};

export const buildGlobalsObjectFromEnv = ({ globals, target }) => {
  let { names, prefix, suffix } = globals;

  if (target === undefined) {
    return buildObject({
      names: Object.keys(names),
      prefix,
      source: names,
      suffix,
      target,
    });
  }

  return buildObject({
    names: Object.keys(names),
    prefix,
    source: process.env,
    suffix,
    target,
  });
};
