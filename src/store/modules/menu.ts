// import type { ErrorMessageMode } from '/#/axios';
import { defineStore } from 'pinia';
import { store } from '/@/store';
import { updateMenu, deleteMenu } from '/@/api/system/index';

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
    async updateMenu(data) {
      try {
        await updateMenu(data);
      } catch {
        console.log('更新菜单失败');
      }
    },

    async deleteMenu(id) {
      try {
        await deleteMenu(id);
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
