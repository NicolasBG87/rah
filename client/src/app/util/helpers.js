import moment from "moment";
import "moment-duration-format";

export const TEXT = {
  capitalize: value => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  },
  formatHeader: value => {
    let removeNonAlpha = value.replace(/[\W_]+/g, " ");
    return removeNonAlpha
      .split(" ")
      .map(item => this.capitalize(item))
      .join(" ");
  }
};

export const DATE = {
  getDuration: value => {
    const timestamp = moment(new Date());
    const expiresAt = moment(value).add(3, "days");
    const duration = moment.duration(expiresAt.diff(timestamp));

    return duration;
  },
  getTimeAgo: value => {
    return moment(value).fromNow();
  },
  formatDate: value => {
    return moment(value).format("MMM, Do YYYY");
  },
  getTimeLeft: value => {
    return value.format("h [hour]");
  }
};
