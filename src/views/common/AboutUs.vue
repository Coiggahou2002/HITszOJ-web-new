<template>
  <div
    class="select-none flex flex-col py-8 h-full justify-center items-center"
  >
    <div class="container">
      <div class="mt-5 mb-12 px-4 py-8">
        <div class="flex flex-col justify-center items-center">
          <div class="my-4 text-4xl text-center font-light">项目贡献者</div>
          <p class="text-gray-400 text-nm text-center font-light mb-6">
            Contributors
          </p>

          <div class="flex flex-wrap ">
            <div
              class="p-8 contr-card mx-5 my-3 flex flex-col justify-center flex-grow-0 items-center"
              v-for="contributor in contributors"
              :key="contributor.name"
              @click="jmp2link(contributor.pageLink)"
            >
              <div class="rounded-full overflow-hidden mb-6">
                <img
                  style="width: 100px; height: 100px; object-fit: cover"
                  :src="contributor.avatarUrl"
                  alt="avatar"
                />
              </div>
              <div class="text-xl text-gray-700 font-bold mb-1">{{ contributor.zhName }}</div>
              <div class="text-gray-500 mb-1">
                {{ contributor.education }}
              </div>
              <div
                v-if="roles[contributor.role]"
                :style="{
                  backgroundColor: getRoleColor(contributor.role),
                }"
                class="px-3 text-xs py-1 mt-2 border text-white rounded-2xl"
              >
                @ {{ roles[contributor.role].name }}
              </div>
              <!-- <a :href="contributor.pageLink" :class="contributor.pageLink ? 'clickable' : 'unclickable'">{{ contributor.pageLinkLabel }}</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CJCard from "../../components/CJCard.vue";

export default {
  name: "AboutUs",
  components: { CJCard },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    getRoleColor(roleIdx) {
      return this.roles[roleIdx].color;
    },
    jmp2link(url) {
      window.open(url, "_blank");
    },
  },
  data() {
    return {
      roles: [
        {
          id: 0,
          name: "开发组长",
          color: "#f97316",
        },
        {
          id: 1,
          name: "后端开发",
          color: "#f43f5e",
        },
        {
          id: 2,
          name: "前端开发",
          color: "#2563eb",
        },
      ],
      contributors: [
        {
          zhName: "张海军",
          education: "博士、教授",
          pageLinkLabel: "主页",
          pageLink: "https://www.dl2link.com/",
          avatarUrl: "http://euphonium.cn/develop_team/zhj.jpg",
        },
        {
          zhName: "蔡恭灿",
          education: "硕士在读",
          pageLinkLabel: "主页",
          pageLink: "https://github.com/euphonium1998",
          avatarUrl: "http://euphonium.cn/develop_team/cgc.jpg",
          role: 0,
        },
        {
          zhName: "蔡嘉豪",
          education: "本科在读",
          pageLinkLabel: "主页",
          pageLink: "https://github.com/Coiggahou2002",
          avatarUrl: "http://euphonium.cn/develop_team/cjh.png",
          role: 2,
        },
        {
          zhName: "黄恺存",
          education: "本科在读",
          pageLinkLabel: "主页",
          pageLink: "",
          avatarUrl: "https://avatars.githubusercontent.com/u/61425788?v=4",
          dev: "后端开发",
          role: 1,
        },
        {
          zhName: "王浩睿",
          education: "本科在读",
          pageLinkLabel: "主页",
          pageLink: "",
          avatarUrl: "https://avatars.githubusercontent.com/u/61899839?v=4",
          role: 1,
        },
        {
          zhName: "李萌",
          education: "本科在读",
          pageLinkLabel: "主页",
          pageLink: "https://github.com/Mimasss2",
          avatarUrl: "https://avatars.githubusercontent.com/u/73371588?v=4",
          role: 1,
        },
        {
          zhName: "沈文心",
          education: "22届本科毕业生",
          pageLinkLabel: "主页",
          pageLink: "",
          avatarUrl: "https://avatars.githubusercontent.com/u/65153863?v=4",
          role: 2,
        },
        {
          zhName: "黄董",
          education: "本科在读",
          pageLinkLabel: "主页",
          pageLink: "",
          avatarUrl: "https://avatars.githubusercontent.com/u/32034033?v=4",
          dev: "前端开发",
          role: 2,
        },
        {
          zhName: "董明龙",
          education: "硕士在读",
          pageLinkLabel: "主页",
          pageLink: "",
          avatarUrl: "http://euphonium.cn/develop_team/dml.jpg",
          role: 1,
        },
        {
          zhName: "张纯鑫",
          education: "硕士在读",
          pageLinkLabel: "主页",
          pageLink: "https://github.com/AlanFranklin258",
          avatarUrl: "http://euphonium.cn/develop_team/zcx.png",
          role: 2,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.clickable {
  cursor: pointer;
}
.unclickable {
  cursor: not-allowed;
  color: rgb(202, 202, 202);
}
.contr-card {
  border-width: 2px;
  border-style: solid;
  border-radius: 1rem;
  transition: all 0.2s;
  @apply bg-white border-gray-200;

  &:hover {
    transform: translateY(-2%);
    border: 2px solid rgb(35, 123, 255);
    cursor: pointer;
    box-shadow: 0 10px 15px -3px rgb(35, 123, 255, 0.3),
      0 4px 6px -4px rgb(35, 123, 255, 0.1);
  }
}
</style>
