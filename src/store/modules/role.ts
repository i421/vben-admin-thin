// import type { ErrorMessageMode } from '/#/axios';
import { defineStore } from 'pinia';
import { store } from '/@/store';
import { updateOrCreateRole, deleteRole } from '/@/api/system/index';
import { useMessage } from '/@/hooks/web/useMessage';

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
    async updateOrCreateRole(data) {
      const { notification } = useMessage();
      try {
        await updateOrCreateRole(data);
      } catch {
        notification.error({
          message: '更新失败',
        });
      }
    },

    async deleteRole(id) {
      const { notification } = useMessage();
      try {
        const res = await deleteRole(id);
        notification.success({
          message: '删除成功',
        });
        return res;
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
