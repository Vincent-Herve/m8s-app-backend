import slugify from 'slugify';

export const getSlugByActivityTitle = (title) => {
  const modifiedTitle = title.replace('&', '').replace('_', '-');
  const slug = slugify(modifiedTitle, {
    lower: true,
  });
  return slug;
};

export const getUrlByActivityTitle = (title) => {
  const url = `/activity/${getSlugByActivityTitle(title)}`;
  return url;
};

export const getActivityBySlug = (activities, slug) => {
  // eslint-disable-next-line arrow-body-style
  const activity = activities.find((currentActivity) => {
    return getSlugByActivityTitle(currentActivity.title) === slug;
  });
  return activity;
};

export const getTitleByActivitiesNumber = (number) => {
  let title = '';
  if (number === 0) {
    title = 'Activités à venir. Revenez bientôt';
  }
  else if (number === 1) {
    title = 'Découvrez notre activité';
  }
  else {
    title = 'Découvrez toutes nos activités';
  }
  return title;
};

export const getActivitiesByIds = (ids, activities) => {
  let selectedActivities = activities.filter((activity) => ids.includes(activity.id));
  selectedActivities = selectedActivities.map((activity) => activity.title);
  return selectedActivities;
};
