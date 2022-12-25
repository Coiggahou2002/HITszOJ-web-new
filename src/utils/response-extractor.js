// 将对响应体信息的提取方式单独解耦出来
const ResponseExtractor = {
    /**
     * 取出服务端自定义响应码
     */
    getCode(resp) {
        return resp && resp.data && resp.data.code;
    },

    /**
     * 取出服务端自定义响应信息
     */
    getMsg(resp) {
        return resp && resp.data && resp.data.msg;
    },

    /**
     * 取出服务端自定义响应体中的数据部分
     */
    getData(resp) {
        return resp && resp.data && resp.data.data;
    },

    /**
     * 取出服务端自定义响应体中的响应成功标识
     */
    isSuccessful(resp) {
        return resp && resp.data && resp.data.success;
    }
}

export default ResponseExtractor;