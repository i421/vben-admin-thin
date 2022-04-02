// import type { ErrorMessageMode } from '/#/axios';
import { defineStore } from 'pinia';
import { store } from '/@/store';
import { updateDept, deleteDept } from '/@/api/system/index';

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
     * @description: logout
     */
    async updateDept(data) {
      try {
        await updateDept(data);
      } catch {
        console.log('更新部门失败');
      }
    },

    async deleteDept(id) {
      try {
        await deleteDept(id);
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
