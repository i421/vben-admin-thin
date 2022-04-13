// import type { ErrorMessageMode } from '/#/axios';
import { defineStore } from 'pinia';
import { store } from '/@/store';
import { updateOrCreateMenu, deleteMenu } from '/@/api/system/index';
import { useMessage } from '/@/hooks/web/useMessage';

export const useMenuStore = defineStore({
  id: 'app-menu',
  state: (): MenuState => ({
    //
  }),
  getters: {
    //
  },
  actions: {
    /**
     * @description: logout
     */
    async updateOrCreateMenu(data) {
      try {
        await updateOrCreateMenu(data);
      } catch {
        console.log('更新菜单失败');
      }
    },

    async deleteMenu(id) {
      const { notification } = useMessage();
      try {
        const res = await deleteMenu(id);
        notification.success({
          message: '删除成功',
        });
        return res;
      } catch {
        console.log('删除菜单失败');
      }
    },
  },
});

// Need to be used outside the setup
export function useMenuStoreWithOut() {
  return useMenuStore(store);
}
