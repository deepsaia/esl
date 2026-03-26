import React from 'react';
import styles from './styles.module.css';

interface Props {
  moduleNumber: string;
  title: string;
  icon: string;
}

const MODULE_ICONS: Record<string, string> = {
  '00': '\u{1F9EC}',
  '01': '\u{1F3D4}\u{FE0F}',
  '02': '\u{1F9E9}',
  '03': '\u{1F500}',
  '04': '\u{1F3DD}\u{FE0F}',
  '05': '\u{1F9EA}',
  '06': '\u{1F465}',
  '07': '\u{1F451}',
  '08': '\u{1F680}',
  '09': '\u{1F333}',
  '10': '\u{2194}\u{FE0F}',
  '11': '\u{1F4CA}',
  '12': '\u{2694}\u{FE0F}',
  '13': '\u{1F426}',
  '14': '\u{1F41C}',
  '15': '\u{1F41D}',
  '16': '\u{1F3AF}',
  '17': '\u{1F4C8}',
  '18': '\u{1F308}',
  '19': '\u{1F9E0}',
  '20': '\u{1F916}',
  '21': '\u{1F3AE}',
  '22': '\u{1F512}',
  '23': '\u{1F52E}',
  '24': '\u{1F4DC}',
  '25': '\u{1F4CF}',
  '26': '\u{1F3C6}',
};

export function getModuleInfo(title: string): {moduleNumber: string; moduleName: string; icon: string} | null {
  const match = title.match(/^Module\s+(\d{2}):\s*(.+)$/i);
  if (!match) return null;
  const moduleNumber = match[1];
  const moduleName = match[2];
  const icon = MODULE_ICONS[moduleNumber] || '\u{1F4D6}';
  return {moduleNumber, moduleName, icon};
}

export default function ModuleBanner({moduleNumber, title, icon}: Props): React.JSX.Element {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerIcon}>{icon}</div>
      <div className={styles.bannerText}>
        <span className={styles.bannerLabel}>Module {moduleNumber}</span>
        <span className={styles.bannerTitle}>{title}</span>
      </div>
    </div>
  );
}
