export default [
  {
    url: "/usr/loginAccount",
    mothod: "post",
    response: () => {
      return {
        code: 200,
        msg: "nice",
        success: true,
        data: {
          id: "30",
          random: "2HOCHo",
        },
      };
    },
  },
  {
    url: "/usr/loginPassword",
    mothod: "post",
    response: () => {
      return {
        code: 200,
        msg: "nice",
        success: true,
        // data: {
        //   id: "30",
        //   random: "2HOCHo",
        // },
      };
    },
  },
  {
    url: "/usr/getUserInfo",
    method: "get",
    response: () => {
      return {
        success: true,
        code: 200,
        msg: "获取信息成功",
        data: {
          id: "30",
          account: "coiggahou",
          password: null,
          username: "蔡嘉豪",
          avatarPath:
            "http://euphonium.cn/avatar_coiggahou?e=1671960871&token=s-PX_pO4g6XxGc2IFT9NX7ZjMlk5cxgFQQZye65E:xkyQYeC0U8JvSxJiIDqKs9myjZI=",
          identity: 1,
          nickName: null,
          email: null,
          className: "开发人员",
          classId: null,
          labId: null,
        },
      };
    },
  },
  {
    url: "/usr/logout",
    method: "post",
    response: () => {
      return {
        success: true,
        code: 200,
        msg: "nice",
      };
    },
  },
  {
    url: "/project/getProjectMessage",
    method: "get",
    response: ({ query }) => {
      const { type, uid } = query;
        return {
          code: 200,
          success: true,
          msg: "nice",
          data: {
            assignmentList: [

            ],
            labList: [
              {
                name: '最短路算法',
                status: 0,
                deadline: '2022-12-26',
                daysLeft: 3,
                description: 'sfjsflksdfjslf',
              },
              {
                name: '二叉树的序列化与反序列化',
                status: 1,
                deadline: '2022-12-26',
                daysLeft: 3,
                description: 'sfjsflksdfjslf',
              },
              {
                name: '动态规划之零钱问题',
                status: 2,
                deadline: '2022-12-26',
                daysLeft: 3,
                description: 'sfjsflksdfjslf',
              },
              {
                name: '字符串哈希',
                status: 3,
                deadline: '2022-12-26',
                daysLeft: 3,
                description: 'sfjsflksdfjslf',
              },
              {
                name: '二叉查找树实现',
                status: 1,
                deadline: '2022-12-26',
                daysLeft: 3,
                description: 'sfjsflksdfjslf',
              },
              {
                name: '二分图判定',
                status: 1,
                deadline: '2022-12-26',
                daysLeft: 3,
                description: 'sfjsflksdfjslf',
              },
            ],
          },
        };
    },
  },
];
