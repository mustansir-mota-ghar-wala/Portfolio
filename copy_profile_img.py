import shutil
import os

src = r'A:\portfolio\media\projects\purple shirt pic 2 mustansir.jpeg'
dst_dir = r'A:\portfolio\frontend\public\images'
dst = os.path.join(dst_dir, 'profile.jpeg')

os.makedirs(dst_dir, exist_ok=True)
shutil.copy2(src, dst)
print(f'COPIED: {os.path.getsize(dst)} bytes -> {dst}')
