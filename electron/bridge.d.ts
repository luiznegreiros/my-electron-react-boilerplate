import { ElectronHandler } from './bridge';

declare global {
  interface Window {
    electron: ElectronHandler;
  }
}
