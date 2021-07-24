'use strict';

module.exports = {
  output(data, status = 200, message = '') {
    this.response.status = status;
    this.body = {
      success: status === 200,
      data,
      message: message || '成功',
    };
  },
};
