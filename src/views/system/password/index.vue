<template>
  <PageWrapper title="修改当前用户密码" content="修改成功后会自动退出当前登录！">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicForm @register="register" />
      <div class="flex justify-center">
        <a-button @click="resetFields"> 重置 </a-button>
        <a-button class="!ml-4" type="primary" @click="handleSubmit"> 确认 </a-button>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form';

  import { useUserStore } from '/@/store/modules/user';

  import { formSchema } from './pwd.data';
  export default defineComponent({
    name: 'ChangePassword',
    components: { BasicForm, PageWrapper },
    setup() {
      const [register, { validate, resetFields }] = useForm({
        size: 'large',
        labelWidth: 100,
        showActionButtonGroup: false,
        schemas: formSchema,
      });

      const userStore = useUserStore();

      async function handleSubmit() {
        console.log('submit');
        try {
          const values = await validate();
          const { passwordOld, passwordNew } = values;

          const res = await userStore.updatePassword({
            oldPwd: passwordOld,
            newPwd: passwordNew,
            id: userStore.getUserInfo?.userId,
          });
          console.log(passwordOld, passwordNew);
          // store返回则有数据
          // const { router } = useRouter();
          // router.push(pageEnum.BASE_LOGIN);
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      }

      return { register, resetFields, handleSubmit };
    },
  });
</script>
