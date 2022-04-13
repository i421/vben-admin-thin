// import type { ErrorMessageMode } from '/#/axios';
import { defineStore } from 'pinia';
import { store } from '/@/store';
import { updateOrCreateDept, deleteDept } from '/@/api/system/index';
import { useMessage } from '/@/hooks/web/useMessage';

export const useDeptStore = defineStore({
  id: 'app-dept',
  state: (): DeptState => ({
    //
  }),
  getters: {
    //
  },
  actions: {
    /**
     * @description: 更新和创建
     */
    async updateOrCreateDept(data) {
      try {
        await updateOrCreateDept(data);
      } catch {
        console.log('更新部门失败');
      }
    },

    async deleteDept(id) {
      const { notification } = useMessage();
      try {
        const res = await deleteDept(id);
        notification.success({
          message: '删除成功',
        });
        return res;
      } catch {
        console.log('删除部门失败');
      }
    },
  },
});

// Need to be used outside the setup
export function useDeptStoreWithOut() {
  return useDeptStore(store);
}
