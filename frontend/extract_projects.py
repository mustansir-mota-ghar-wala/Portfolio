import re

with open('src/data/portfolioData.js', 'r', encoding='utf-8') as f:
    content = f.read()

start = content.find('projects:')
end = content.find('\n  education:', start)
if end == -1:
    end = len(content)
section = content[start:end]
print(section)
