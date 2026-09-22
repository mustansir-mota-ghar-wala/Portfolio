import shutil
import os

src = r'A:\portfolio\media\projects\WhatsApp Image 2026-09-23 at 04.25.01.jpeg'
dst_dir = r'A:\portfolio\frontend\public\images'
dst = os.path.join(dst_dir, 'profile.jpeg')

os.makedirs(dst_dir, exist_ok=True)
shutil.copy2(src, dst)
print(f'COPIED: {os.path.getsize(dst)} bytes -> {dst}')
