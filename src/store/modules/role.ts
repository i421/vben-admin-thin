// import type { ErrorMessageMode } from '/#/axios';
import { defineStore } from 'pinia';
import { store } from '/@/store';
import { updateRole, deleteRole } from '/@/api/system/index';

export const useRoleStore = defineStore({
  id: 'app-role',
  state: (): RoleState => ({
    //
  }),
  getters: {
    //
  },
  actions: {
    /**
     * @description: logout
     */
    async updateRole(data) {
      try {
        await updateRole(data);
      } catch {
        console.log('更新角色失败');
      }
    },

    async deleteRole(id) {
      try {
        await deleteRole(id);
      } catch (e) {
        console.log('删除角色失败');
      }
    },
  },
});

// Need to be used outside the setup
export function useRoleStoreWithOut() {
  return useRoleStore(store);
}
