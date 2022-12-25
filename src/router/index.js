import { createRouter, createWebHashHistory } from 'vue-router';

import Nav from "@/views/common/Nav.vue";
import Login from "@/views/common/Login.vue";
import PageNotFound from "@/views/common/PageNotFound.vue";
import ForgotPassword from "@/views/common/ForgotPassword.vue";


export const defaultRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forgot_password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/404",
    name: "NotFoundPage",
    component: PageNotFound,
  },
];

export const asyncRoutes = [
  {
    path: "/",
    name: "App",
    component: Nav,
    redirect: "/home",
    meta: {
      roles: [1],
    },
    children: [
      {
        path: "home",
        name: "StuHome",
        components: {
          main: () => import("@/views/stu/StuHome.vue"),
        },
        meta: {
          nav: {
            name: "首页",
            bicon: 'bi bi-speedometer2',
          },
          roles: [1, 2],
        },
      },
      {
        path: "homework",
        name: "StuHomework",
        components: {
          main: () => import("@/views/stu/StuTaskPage.vue"),
        },
        meta: {
          nav: {
            name: "作业",
            bicon: 'bi bi-vector-pen',
          },
          roles: [1, 2],
        },
      },
      {
        path: "experiment/:labId",
        name: "StuExperiment",
        components: {
          main: () => import("@/views/stu/StuExpPage.vue"),
        },
        meta: {
          roles: [1, 2],
        },
      },
      {
        path: "questions",
        name: "StuQuestionList",
        components: {
          main: () => import("@/views/stu/StuQuestionList.vue"),
        },
        meta: {
          nav: {
            name: "实验题目",
          },
          roles: [2],
        },
      },
      {
        path: "user_guide",
        name: "UserGuide",
        components: {
          main: () => import("@/views/common/UserGuide.vue"),
        },
        meta: {
          nav: {
            name: "用户指南",
            bicon: 'bi bi-compass',
          },
          roles: [1, 2, 3],
        },
      },
      {
        path: "question_feedback",
        name: "QuestionFeedback",
        components: {
          main: () => import("@/views/common/QuestionFeedback.vue"),
        },
        meta: {
          nav: {
            name: "常见问题和反馈",
            bicon: 'bi bi-question-circle',
          },
          roles: [1, 2, 3],
        },
      },
      {
        path: "update_log",
        name: "UpdateLog",
        components: {
          main: () => import("@/views/common/UpdateLog.vue"),
        },
        meta: {
          nav: {
            name: "更新日志",
            bicon: 'bi bi-rocket-takeoff',
          },
          roles: [1, 2, 3],
        },
      },
      {
        path: "about_us",
        name: "AboutUs",
        components: {
          main: () => import("@/views/common/AboutUs.vue"),
        },
        meta: {
          nav: {
            name: "关于我们",
            bicon: "bi bi-people",
          },
          roles: [1,2,3],
        },
      },
      {
        path: "/homework_bench",
        components: {
          main: () => import("@/views/TAVue/HomeworkBench.vue"),
        },
        meta: {
          nav: {
            name: "助教面板",
          },
          roles: [2],
        },
      },
      {
        path: "articles",
        name: "StuArticles",
        components: {
          main: () => import("@/views/stu/StuArticles.vue"),
        },
        meta: {
          // 2022-03-11 Coiggahou
          // 导航栏去除“文章”
          nav: {
            name: "文章",
          },
          roles: [1, 2, 3],
        },
      },
      {
        path: "article",
        name: "ArticleContent",
        components: {
          main: () => import("@/views/common/Article.vue"),
        },
        meta: {
          // 2022-03-11 Coiggahou
          // 导航栏去除“文章详情”
          nav: {
            name: "文章详情",
          },
          roles: [1, 2, 3],
        },
      },
      {
        path: "question_panel/:qid",
        name: "QuestionPanel",
        redirect: "question_panel/:qid/coding_panel",
        components: {
          main: () => import("@/views/common/QuestionPanel.vue"),
        },
        meta: {
          roles: [1, 2],
        },
        children: [
          {
            path: "coding_panel",
            name: "ProblemCodingPanel",
            components: {
              QuestionPanelRight: () =>
                import("@/views/common/ProblemCodingPanel.vue"),
            },
          },
          {
            path: "view_solution/:solutionId",
            name: "SolutionView",
            components: {
              QuestionPanelRight: () => import("@/views/common/SolutionView.vue"),
            },
          },
          {
            path: "new_solution",
            name: "NewSolution",
            components: {
              QuestionPanelRight: () => import("@/views/common/NewSolution.vue"),
            },
          },
        ],
      },
      // {
      //   path: "edit_article",
      //   name: "ArticleEditPage",
      //   components: {
      //     main: ArticleEditPage,
      //   },
      //   meta: {
      //     nav: {
      //       name: "发布/编辑",
      //     },
      //     roles: [1],
      //   },
      // },
      {
        path: "test",
        name: "Test",
        components: {
          main: () => import("@/views/common/Test.vue"),
        },
        meta: {
          nav: {
            name: "测试页面",
          },
          roles: [1, 2, 3],
        },
      },
      {
        path: "profile",
        name: "StuProfile",
        redirect: "/profile/info",
        components: {
          main: () => import("@/views/stu/StuProfile.vue"),
        },
        meta: {
          roles: [1, 2],
        },
        children: [
          {
            path: "info",
            name: "StuProfileInfo",
            components: {
              profileSettingView: () => import("@/views/stu/StuProfileInfo.vue"),
            },
            meta: {
              roles: [1, 2],
            },
          },
          {
            path: "safety",
            name: "StuProfileSafety",
            components: {
              profileSettingView: () => import("@/views/stu/StuProfileSafety.vue"),
            },
            meta: {
              roles: [1, 2],
            },
          },
        ],
      },

    ],
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...defaultRoutes],
});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router